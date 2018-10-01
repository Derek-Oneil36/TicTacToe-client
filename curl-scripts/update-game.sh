# sh curl-scripts/json/update-game.sh

curl `https://tic-tac-toe-wdi.herokuapp.com/games/:${ID}` \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "id":
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
    }
  }'

echo
