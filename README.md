# Writing GameGrid initial component (it will be updated in next steps according to the acceptable practice)
## At this step the component should show only names of the games from the first page of all existing game
## Consider using useEffect for requesting data from RAWG API (it will be like api.get&lt;GamesResponse&gt;("/games").then(res => setGames(res.data)))...GamesResponse described below...setGames (think of useState for rendering)
### AXIOS is written on TS so AXIOS methods may contain parametrized types with additional hints and syntax validating
####  import api from (path to the module containing axios.create...) to make possible to use predefined object with baseUrl and key (Consider getting your own keys)

#### interface Game see Response Schema from https://api.rawg.io/docs/#operation/games_list (At this step we need only id and name)
#### interface GamesResponse see Response Schema from https://api.rawg.io/docs/#operation/games_list (At this step we need only count and results; results - Game[])

