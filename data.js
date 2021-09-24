var APP_DATA = {
  "scenes": [
    {
      "id": "0-quarto-1",
      "name": "Quarto 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2467348938579299,
          "pitch": 0.12355961181974351,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-quarto-2",
      "name": "Quarto 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8448874054542337,
          "pitch": 0.08684062080468813,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corredor",
      "name": "Corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05373511994776692,
          "pitch": 0.14797693748607443,
          "rotation": 0,
          "target": "1-quarto-2"
        },
        {
          "yaw": 1.1404141568445567,
          "pitch": 0.12895646219933887,
          "rotation": 0,
          "target": "3-banheiro"
        },
        {
          "yaw": -1.0293270464959914,
          "pitch": 0.21430900587810697,
          "rotation": 0,
          "target": "0-quarto-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-banheiro",
      "name": "Banheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0096032914935122,
          "pitch": 0.12633519339385302,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4900611472550231,
          "pitch": 0.35697923709930635,
          "title": "Toalhas",
          "text": "Fornecidas pela hospedagem<br>"
        }
      ]
    }
  ],
  "name": "Perfect Copacabana",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
