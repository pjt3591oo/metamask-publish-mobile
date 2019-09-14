# metamask clone

wallet of ethereum

## storage model

* wallet

```json
{
  "wallet": [
    {
      "address": "0x00000...",
      "privateKey": "adfasdasd123..."
    }, {
      "address": "0x00000...",
      "privateKey": "adfasdasd123..."
    }
  ]
}
```

* history

```json
{
  "history": {
    "0x001": [
      {"from": "", "to": "", "value": "", "txHash": "", "fee": ""}, 
      {"from": "", "to": "", "value": "", "txHash": "", "fee": ""}  
    ],
    "0x002": [
      {"from": "", "to": "", "value": "", "txHash": "", "fee": ""}, 
      {"from": "", "to": "", "value": "", "txHash": "", "fee": ""}  
    ],
    "0x003": [
      {"from": "", "to": "", "value": "", "txHash": "", "fee": ""}, 
      {"from": "", "to": "", "value": "", "txHash": "", "fee": ""}  
    ]
  }
}
```

* seed

```json
{
  "seed": "2e03d11a9c66d815510e471a8e5aa083604baee6c26779e16c72bfb79cc9a1d9592d84a1f2f1c4ed9c2939b683538b42f9a71b5bcd4e99ec97bf0755f1f67f0b",
  "index": 0
}
```