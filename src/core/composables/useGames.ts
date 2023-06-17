import { ref } from "vue";


function useGames() {
  const games = ref(null);
  const error = ref(null);
  
  return {
    games,
    error
  }
}

export {
  useGames
}