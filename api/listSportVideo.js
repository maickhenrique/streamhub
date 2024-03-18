const axios = require('axios');

const ListSportVideos = async () => {
  try {
    const accessToken = '7f239785eb81dc81c2de0c16fddb9c73';
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    const searchTerm = 'sports';
    const url = `https://api.vimeo.com/videos?query=${encodeURIComponent(searchTerm)}&categories=sports`;

    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar vídeos de esporte:', error.response.data);
    throw error;
  }
};

module.exports = ListSportVideos;
