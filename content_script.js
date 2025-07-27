//Run readability to extract text
const article = new Readability(document.cloneNode(true)).parse();

if (!article) {
    console.warn("No article found");
} else {
    //clean doc
    document.head.innerHTML = "";
    document.body.innerHTML = `
    <h1> ${article.title}</h1>
    <div id = "reader-content">${article.content}</div>
    `;
    document.body.style.background = "#2b213a";
    document.body.style.color = "#e0b7ff";
    document.body.style.fontFamily = "Fira Code, sans-serif";
    document.body.style.maxWidth = "700px";
    document.body.style.margin = "40px auto";
    document.body.style.lineHeight = "1.6";
    document.body.style.fontSize = "18px";
} 
