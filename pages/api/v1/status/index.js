function status(request, response) {
  response.status(200).json({ chave: "São acima da média apagar isso depois" });
}

export default status;
