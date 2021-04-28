# Endpoint

## Read Data Sensor

Endpoint: `/channels/<channel_id>/feeds.json`

Params:

- **channel_id** - id channel

Example Response:

```json
{
  "success": true,
  "channel": {
    "id": 1,
    "name": "Raspi 1",
    "field1": "Sensor 1",
    "field2": "Sensor 2",
    "field3": "Sensor 3",
    "field4": "Sensor 4"
  },
  "feeds": [
    {
      "id": 5,
      "created_at": "2021-04-28T07:06:50.708Z",
      "field1": "1",
      "field2": "2",
      "field3": "3",
      "field4": "46.31"
    },
    {
      "id": 4,
      "created_at": "2021-04-25T06:09:51.084Z",
      "field1": "1",
      "field2": "2",
      "field3": "4",
      "field4": "46.31"
    }
  ]
}
```

---

## Upload Data Sensor

Endpoint: `/update.json`

Queries:

- **api_key** - _required_. api key dari channel.
- **field1** - Data sensor field1.
- **field2** - Data sensor field2.
- **field3** - Data sensor field3.
- **field4** - Data sensor field4.

Example Response:

```json
{
  "success": true,
  "message": "Inserted"
}
```
