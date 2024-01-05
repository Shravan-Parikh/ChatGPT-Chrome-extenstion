//console.log("hello world!"); 

class ChatGPTExtenstion {

    constructor(){
        this.handleRequest()
    }

    handleRequest(){
        chrome.runtime.onMessage.addListener( async (request, sender, response) => {
            if (request.action == "PROMPT") this.promptToChatGPT()
        })
    }

    promptToChatGPT(){
       const prompt = "what is speed hiking and how to avoid bears on trail step by step description"

       const input = document.querySelector("textarea")
       input.value = prompt
       document.querySelector("textarea~button").click()
    }
}

const CGPTExtension = new ChatGPTExtenstion()
