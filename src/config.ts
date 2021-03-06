/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/**
 * Registered application id.
 * This is needed to be able to use premium
 * services such as routing and directions.
 */
export const appId = "TE2IQzk2Ig3iLbW5";

/**
 * Users Portal URL.
 */
export const portalUrl = "http://aereshogeschool.maps.arcgis.com"; // default Portal URL

/**
 * MapView options
 * See doc for details
 * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
 */
export const viewOptions = {
  scale: 5000
};

/**
 * OPTIONAL
 * WebMap id to use for this application.
 * You can update this WebMap id with your own.
 */
export const webMapItem = {
  portalItem: {
    // shared WebMap
    id: "33aa7700c9da49c99b8bf0be6b799be7"
  }
};
