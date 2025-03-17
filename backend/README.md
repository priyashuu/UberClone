# /users/register Endpoint Documentation

## Description
Endpoint to register a new user. It validates the provided data, hashes the password, creates a new user record, and returns an authentication token along with the user data.

## URL HTTP METHOD
`POST /users/register`

## Request Data
- **email**: String, must be a valid email.
- **fullname**: Object containing:
  - **firstname**: String, minimum 3 characters.
  - **lastname**: String, optional but if provided should be at least 3 characters.
- **password**: String, minimum 6 characters.

### Example Request Body
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword"
}
```

## Responses

### Success
- **Status Code**: 201
- **Response Body**:
```json
{
  "token": "JWT_TOKEN",
  "user": {
    // ...user properties...
  }
}
```

### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1NiIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYzNjgwODAwMCwiZXhwIjoxNjM2ODk0MDAwfQ.VrEBKVjkCzt5oA2h5xB2q6j6RHkT8T0x1I1s6qD2emE",
  "user": {
    "fullname" :(object),
    "email": "user@example.com",
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

### Failure
- **Status Code**: 201
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Validation error message",
      "param": "field name",
      "location": "body"
    }
    // ... other errors
  ]
}
```

### Example Failure Response
```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Notes
- Ensure that the password is sufficiently strong.
- The `lastname` field is optional.
- The token is generated using JWT and will be used for authenticated requests.
