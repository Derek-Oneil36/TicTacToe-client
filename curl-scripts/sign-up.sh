# sh curl-scripts/json/sign-up.sh

# don't use a password you use for any real websites!
curl "https://tic-tac-toe-wdi.herokuapp.com/" \
  --include \
  --request POST \
  --data '{
    "credentials": {
      "email":"'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo