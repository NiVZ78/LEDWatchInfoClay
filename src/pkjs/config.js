module.exports = [
  
   {
        "type": "heading",
        "defaultValue": "LED Watch Info Settings"
   },
   {
    "type": "section",
    "items": 
    [
      {
        "type": "heading",
        "defaultValue": "Colors",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "label": "Highlight Color",
        "defaultValue": "aaffff",
        "messageKey": "KEY_HIGHLIGHT_COLOR",
        "capabilities": ["COLOR"]
     },
     {
        "type": "color",
        "label": "Location Color",
        "defaultValue": "ffffaa",
        "messageKey": "KEY_LOCATION_COLOR",
        "capabilities": ["COLOR"]
     },
    ]
   },
   {
    "type": "section",
    "items": 
    [
      {
        "type": "heading",
        "defaultValue": "Look and Feel"
      },
      {
        "type": "radiogroup",
        "messageKey": "KEY_VIBRATE",
        "label": "Hourly Vibrate",
        "defaultValue": "1",
        "options": [
          { 
            "label": "Short", 
            "value": "2" 
          },
          { 
            "label": "Long", 
            "value": "1" 
          },
          { 
            "label": "Off", 
            "value": "0" 
          }
        ]
      }
     ]
   },
     {
    "type": "section",
    "items": 
    [
      {
        "type": "heading",
        "defaultValue": "Weather"
      },
      {
        "type": "radiogroup",
        "messageKey": "KEY_UPDATE_INTERVAL",
        "label": "Update Interval",
        "defaultValue": "0",
        "options": [
          { 
            "label": "30 minutes", 
            "value": "0" 
          },
          { 
            "label": "60 minutes", 
            "value": "1" 
          }
        ]
      },
      {
        "type": "radiogroup",
        "messageKey": "KEY_UPDATE_INTERVAL",
        "label": "Temperature Units",
        "defaultValue": "0",
        "options": [
          { 
            "label": "Celsius", 
            "value": "0" 
          },
          { 
            "label": "Farenheit", 
            "value": "1" 
          }
        ]
      }
     ]
   }
];