/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = `<!-- # CE - camunda-cockpit-ui/client/scripts/pages/process-instance.html -->
<div class="ctn-fixed-view">
  <div class="ctn-content-container"
       ctn-collapsable-parent="sidebar">

    <!-- toolbar -->
    <div class="ctn-toolbar">

      <!-- Toolbar actions are provided by plugins -->
      <span ng-repeat="tabProvider in processInstanceActions">
        <view provider="tabProvider"
              vars="processInstanceVars" />
      </span>

    </div>

    <!-- sidebar -->
    <div class="ctn-column ctn-sidebar ctn-scroll"
         ctn-collapsable="left"
         ng-controller="ProcessInstanceFilterController">

      <ul class="nav nav-tabs">
        <li ng-class="{active: sidebarTab === 'info'}">
          <a ng-click="sidebarTab = 'info'">{{ 'PROCESS_INSTANCE_INFORMATION' | translate }}</a>
        </li>
        <li ng-class="{active: sidebarTab === 'filters'}">
          <a ng-click="sidebarTab = 'filters'">{{ 'PROCESS_INSTANCE_FILTER' | translate }}</a>
        </li>
      </ul>

      <div class="tab-content"
           ng-if="sidebarTab === 'info'">
        <dl class="process-information">
          <dt cam-widget-clipboard="processInstance.id"
              ng-class="{hovered: hovered === 'instance-id'}">
            <span uib-tooltip="{{ 'PROCESS_INSTANCE_TOOLTIP_INSTANCE_ID_DATABASE' | translate }}">{{ 'PROCESS_INSTANCE_INSTANCE_ID' | translate }}</span>
          </dt>
          <dd class="instance-id"
              ng-mouseenter="hoverTitle('instance-id')"
              ng-mouseleave="hoverTitle()">
            {{ processInstance.id }}
          </dd>

          <dt cam-widget-clipboard="processInstance.businessKey"
              ng-class="{hovered: hovered === 'business-key'}"
              ng-if="processInstance.businessKey">
            <span uib-tooltip="{{ 'PROCESS_INSTANCE_TOOLTIP_BUSINESS_KEY' | translate }}">{{ 'PROCESS_INSTANCE_BUSINESS_KEY' | translate }}</span>
          </dt>
          <dd ng-if="processInstance.businessKey"
              class="business-key"
              ng-mouseenter="hoverTitle('business-key')"
              ng-mouseleave="hoverTitle()">
            {{ processInstance.businessKey }}
          </dd>
          <dt ng-if="!processInstance.businessKey">
            <span uib-tooltip="{{ 'PROCESS_INSTANCE_TOOLTIP_BUSINESS_KEY' | translate }}">{{ 'PROCESS_INSTANCE_BUSINESS_KEY' | translate }}</span>
          </dt>
          <dd ng-if="!processInstance.businessKey"
              class="business-key"><span class="null-value">{{ 'PROCESS_INSTANCE_NULL' | translate }}</span></dd>

          <dt>{{ 'PROCESS_INSTANCE_DEFINITION_VERSION' | translate }}</dt>
          <dd class="definition-version">
            {{ processDefinition.version }}
            <a ng-href="{{ getMigrationUrl() }}"
               class="instance-upgrade-link"
               ng-if="hasMigrationPlugin && !isLatestVersion()">
              <span class="glyphicon glyphicon-arrow-up"
                    uib-tooltip="{{ 'PROCESS_INSTANCE_TOOLTIP_MIGRATE_INSTANCE' | translate }}"
                    tooltip-placement="right"></span>
            </a>
          </dd>

          <dt cam-widget-clipboard="processDefinition.id"
              ng-class="{hovered: hovered === 'definition-id'}">{{ 'PROCESS_INSTANCE_DEFINITION_ID' | translate }}</dt>
          <dd class="definition-id"
              ng-mouseenter="hoverTitle('definition-id')"
              ng-mouseleave="hoverTitle()">
            <a ng-href="#/process-definition/{{ processDefinition.id }}/runtime">{{ processDefinition.id }}</a>
          </dd>

          <dt cam-widget-clipboard="processDefinition.key"
              ng-class="{hovered: hovered === 'definition-key'}">{{ 'PROCESS_INSTANCE_DEFINITION_KEY' | translate }}</dt>
          <dd class="definition-key"
              ng-mouseenter="hoverTitle('definition-key')"
              ng-mouseleave="hoverTitle()">{{ processDefinition.key }}</dd>

          <dt>{{ 'PROCESS_INSTANCE_DEFINITION_NAME' | translate }}</dt>
          <dd class="definition-name">{{ processDefinition.name }}</dd>

          <dt ng-if="processInstance.tenantId"
              ng-class="{hovered: hovered === 'tenant-id'}"
              cam-widget-clipboard="processInstance.tenantId">{{ 'PROCESS_INSTANCE_TENANT_ID' | translate }}</dt>
          <dd class="tenant-id"
              ng-if="processInstance.tenantId"
              ng-mouseenter="hoverTitle('tenant-id')"
              ng-mouseleave="hoverTitle()">{{ processInstance.tenantId }}</dd>
          <dt ng-if="!processInstance.tenantId">{{ 'PROCESS_INSTANCE_TENANT_ID' | translate }}</dt>
          <dd class="tenant-id"
              ng-if="!processInstance.tenantId"><span class="null-value">{{ 'PROCESS_INSTANCE_NULL' | translate }}</span></dd>

          <dt cam-widget-clipboard="processDefinition.deploymentId"
              ng-class="{hovered: hovered === 'deployment-id'}">{{ 'PROCESS_INSTANCE_DEPLOYMENT_ID' | translate }}</dt>
          <dd class="deployment-id"
              ng-mouseenter="hoverTitle('deployment-id')"
              ng-mouseleave="hoverTitle()">
            <a ng-href="{{ getDeploymentUrl() }}">{{ processDefinition.deploymentId }}</a>
          </dd>

          <dt ng-if="superProcessInstance"
              cam-widget-clipboard="superProcessInstance.id"
              ng-class="{hovered: hovered === 'super-process-instance-id'}">{{ 'PROCESS_INSTANCE_SUPER_PROCESS_INSTANCE_ID' | translate }}</dt>
          <dd class="super-process-instance-id"
              ng-if="superProcessInstance.id"
              ng-mouseenter="hoverTitle('super-process-instance-id')"
              ng-mouseleave="hoverTitle()">
            <a ng-href="#/process-instance/{{superProcessInstance.id}}">{{ superProcessInstance.id }}</a>
          </dd>
          <dt ng-if="!superProcessInstance">{{ 'PROCESS_INSTANCE_SUPER_PROCESS_INSTANCE_ID' | translate }}</dt>
          <dd class="super-process-instance-id"
              ng-if="!superProcessInstance">
            <span class="null-value">null</span>
          </dd>

          <dt ng-if="hasMigrationPlugin">{{ 'PROCESS_INSTANCE_RELATED' | translate }}</dt>
          <dd ng-if="hasMigrationPlugin">
            <ul>
              <li>
                <a ng-href="#/migration?searchQuery=%5B%5D&sourceKey={{ processDefinition.key }}">{{ 'PROCESS_INSTANCE_MIGRATION' | translate }}</a>
              </li>
            </ul>
          </dd>

        </dl>
      </div>

      <div class="tab-content filters"
           ng-if="sidebarTab === 'filters'">
        <h5>
          {{ 'PROCESS_INSTANCE_FILTER' | translate }}
          <span class="glyphicon glyphicon-info-sign"
                uib-tooltip="{{ 'PROCESS_INSTANCE_TOOLTIP_ACTIVITY_INSTANCE_TREE' | translate }}"></span>
        </h5>

        <div cam-quick-filter
             name-filter
             holder-selector=".instance-tree"
             label-selector=".tree-node-label"
             item-selector=".tree-node-group">
        </div>

        <div class="filter-selection">
          <button class="btn btn-link btn-xs btn-control"
                  ng-show="filterData.activityInstanceCount"
                  ng-click="clearSelection()">
            <span class="glyphicon glyphicon-remove"></span>
          </button>

          <ng-pluralize count="filterData.activityInstanceCount"
                        when="getDataWhen()">
          </ng-pluralize>
        </div>


        <div class="filter instance-tree">
          <div activity-instance-tree="activityInstanceTree"
               selection="filter"
               on-element-click="handleActivityInstanceSelection(id, activityId, $event)"
               order-children-by="orderChildrenBy()">
          </div>
        </div>
      </div>

      <a class="hide-collapsable pull-right"></a>
    </div>

    <div class="ctn-column ctn-content"
         ctn-collapsable-parent="tabs">

      <!-- content top pane -->
      <div class="ctn-row ctn-content-top"
           is-sidebar-collapsed="onDiagramCollapseChange(collapsed)"
           ctn-collapsable="top">
        <div process-diagram="processDiagram"
             key="{{processInstance.definitionId}}"
             on-element-click="handleBpmnElementSelection(id, $event)"
             selection="filter"
             process-data="processData"
             page-data="pageData"
             collapsed="diagramCollapsed"
             diagram-provider-component="cockpit.processInstance.diagram.plugin"
             overlay-provider-component="cockpit.processInstance.diagram.overlay"></div>

        <a class="hide-collapsable vertical-collapse"
           title="{{ 'PROCESS_INSTANCE_SHOW_TABS' | translate }}"></a>

        <a class="maximize-collapsable vertical-collapse"
           maximize-parent-direction="left"
           title="{{ 'PROCESS_INSTANCE_MAXIMIZE_DIAGRAM' | translate }}"></a>

        <a class="restore-collapsable vertical-collapse"
           maximize-parent-direction="left"
           title="{{ 'PROCESS_INSTANCE_RESTORE_DEFAULT_SIZE' | translate }}"></a>
      </div>

      <!-- content bottom pane -->
      <div class="ctn-row ctn-content-bottom ctn-tabbed">
        <a class="show-collapsable vertical-collapse"
           title="{{ 'PROCESS_INSTANCE_HIDE_TABS' | translate }}"></a>
        <div cam-tabs="{component: 'cockpit.processInstance.runtime.tab'}"
             providers="tabs"
             vars="processInstanceVars"
             vars-values="initData">
        </div>
      </div>

      <a class="show-collapsable"></a>
    </div>
  </div>

</div><!-- end .ctn-fixed-view -->
<!-- / CE - camunda-cockpit-ui/client/scripts/pages/process-instance.html -->
`;
