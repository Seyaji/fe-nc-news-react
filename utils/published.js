const published = (source) => new Date(source?.created_at).toDateString();

export default published