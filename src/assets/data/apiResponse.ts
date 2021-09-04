export var items: [
    {
        "name": "Do Individual AML Search",
        "request": {
            "auth": {
                "type": "bearer",
                "bearer": [
                    {
                        "key": "token",
                        "value": "33bfc416-73a2-40f2-90df-0b66455b47d4",
                        "type": "string"
                    }
                ]
            },
            "method": "POST",
            "header": [],
            "body": {
                "mode": "raw",
                "raw": "{\"size\":10,\"page\":0,\"searchType\":\"FUZZY\",\"name\":[\"narendra modi\"],\"country\":[],\"source\":[],\"guid\":\"\",\"category\":[],\"gender\":[],\"type\":[\"Individual\"]}",
                "options": {
                    "raw": {
                        "language": "json"
                    }
                }
            },
            "url": {
                "raw": "https://api.dev.kychub.com/v2/aml/search",
                "protocol": "https",
                "host": [
                    "api",
                    "dev",
                    "kychub",
                    "com"
                ],
                "path": [
                    "v2",
                    "aml",
                    "search"
                ]
            }
        },
        "response": []
    },
    {
        "name": "Do Corporate AML Search",
        "request": {
            "auth": {
                "type": "bearer",
                "bearer": [
                    {
                        "key": "token",
                        "value": "33bfc416-73a2-40f2-90df-0b66455b47d4",
                        "type": "string"
                    }
                ]
            },
            "method": "POST",
            "header": [],
            "body": {
                "mode": "raw",
                "raw": "{\"size\":10,\"page\":0,\"searchType\":\"FUZZY\",\"name\":[\"Sabtina Ltd\"],\"country\":[],\"source\":[],\"guid\":\"\",\"category\":[],\"gender\":[],\"type\":[\"Organisation\"]}",
                "options": {
                    "raw": {
                        "language": "json"
                    }
                }
            },
            "url": {
                "raw": "https://api.dev.kychub.com/v2/aml/search",
                "protocol": "https",
                "host": [
                    "api",
                    "dev",
                    "kychub",
                    "com"
                ],
                "path": [
                    "v2",
                    "aml",
                    "search"
                ]
            }
        },
        "response": []
    }
]
