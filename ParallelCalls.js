const parallelCalls = async (urls) => {
  try {
// Création d' un tableau de promesses pour chaque URL
      const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));

// Utilise Promise.all pour attendre que toutes les promesses soient résolues
      const responses = await Promise.all(fetchPromises);
    
      // Enregistre les réponses une fois toutes les demandes terminées
      console.log("Toutes les demandes sont terminées. Réponses :");
      console.log(responses);

  }catch(error) {
      console.error("Erreur lors des appels parallèles :", error);
  }
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

parallelCalls(urls);
