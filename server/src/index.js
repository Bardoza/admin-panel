import app from './app';


app.listen(3000, function() {
  const { address, port } = this.address()
  console.log(`Listening on http://${address}:${port}`);
});
