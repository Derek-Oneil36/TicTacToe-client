# sh curl-scripts/json/log-out.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}"\
  --request DELETE \

echo
