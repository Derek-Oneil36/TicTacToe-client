curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
--include \
--request PATCH \
--header "Authorization: Token token=${TOKEN}"\
--data '{
  "password": {
    "old": "'"${OLD}"'"
    "new": "'"${NEW}"'"
  }
}'

echo
