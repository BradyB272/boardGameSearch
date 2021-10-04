import axios from 'axios'

export default axios.create({
  //baseURL is needed for axios
  baseURL: `https://api.boardgameatlas.com/api`,
  headers: {
    Authorization: 'Bearer bf787fd3f518dd6aa635d106de1d8622'
  }
})
