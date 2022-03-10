const pageTitle = (path) => {
   const title = path.replace('/', '').split('')
   title[0] = title[0].toUpperCase()
   return title.join('')
}

export default pageTitle