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

module.exports = `<!-- # CE - camunda-bpm-webapp/webapp/src/main/resources-plugin/base/app/views/processInstance/update-suspension-state-dialog.html -->
<div class="modal-header">
  <h3>{{ (processInstance.suspended ? 'PLUGIN_UPDATE_DIALOG_ACTIVATE' : 'PLUGIN_UPDATE_DIALOG_SUSPEND' | translate) }}</h3>
</div>

<div class="process-instance update-suspension-state modal-body">
  <div notifications-panel></div>

  <div ng-hide="status === 'SUCCESS' || status === 'FAIL'">

    <div ng-show="processInstance.suspended">
      <!-- activation -->
      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_1' | translate}} <i>{{ 'PLUGIN_UPDATE_DIALOG_LEGEND_2' | translate }}</i> {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_3' | translate }}
      </p>

      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_4' | translate}}
      </p>

      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_5' | translate}}
      </p>

      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_6' | translate}}
      </p>

      <p>{{ 'PLUGIN_UPDATE_DIALOG_LEGEND_7' | translate}}</p>
    </div>

    <div ng-hide="processInstance.suspended">
      <!-- suspension -->
      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_8' | translate }} <i>{{ 'PLUGIN_UPDATE_DIALOG_LEGEND_9' | translate }}</i> {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_10' | translate }}
      </p>

      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_11' | translate }}
        <ul>
          <li>{{ 'PLUGIN_UPDATE_DIALOG_CLAIMING' | translate }}</li>
          <li>{{ 'PLUGIN_UPDATE_DIALOG_COMPLETING' | translate }}</li>
          <li>{{ 'PLUGIN_UPDATE_DIALOG_DELEGATION' | translate }}</li>
          <li>{{ 'PLUGIN_UPDATE_DIALOG_CHANGES_IN' | translate }}</li>
        </ul>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_12' | translate }}
      </p>

      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_13' | translate }}
      </p>

      <p>
        {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_14' | translate }}
      </p>

      <p>{{ 'PLUGIN_UPDATE_DIALOG_LEGEND_15' | translate }}</p>
    </div>

  </div>

  <div ng-show="status === 'SUCCESS'">
    <p ng-show="processInstance.suspended">
      {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_16' | translate }}
    </p>
    <p ng-hide="processInstance.suspended">
      {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_17' | translate }}
    </p>
  </div>

  <div ng-show="status === 'FAIL'">
    <p ng-show="processInstance.suspended">
      {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_18' | translate }}
    </p>
    <p ng-hide="processInstance.suspended">
      {{ 'PLUGIN_UPDATE_DIALOG_LEGEND_19' | translate }}
    </p>
  </div>

</div>
<div class="modal-footer">
  <button class="btn btn-default"
          ng-click="close(status)"
          ng-disabled="status === 'PERFORM_UDPATE'"
          ng-hide="status === 'SUCCESS' || status === 'FAIL'">{{ 'PLUGIN_UPDATE_DIALOG_BTN_CLOSE' | translate }}</button>

  <button type="submit"
          class="btn btn-primary"
          ng-click="updateSuspensionState()"
          ng-hide="status === 'SUCCESS' || status === 'FAIL'"
          ng-disabled="status === 'PERFORM_UDPATE'">
    {{ (processInstance.suspended ? 'PLUGIN_UPDATE_DIALOG_BTN_ACTIVATE' : 'PLUGIN_UPDATE_DIALOG_BTN_SUSPEND' | translate) }}
  </button>

  <button class="btn btn-primary"
          ng-click="close(status)"
          ng-show="status === 'SUCCESS' || status === 'FAIL'">{{ 'PLUGIN_UPDATE_DIALOG_BTN_OK' | translate }}</button>
</div>
<!-- / CE - camunda-bpm-webapp/webapp/src/main/resources-plugin/base/app/views/processInstance/update-suspension-state-dialog.html -->
`;
