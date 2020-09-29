@app
begin-app

@static
fingerprint true

@http
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
