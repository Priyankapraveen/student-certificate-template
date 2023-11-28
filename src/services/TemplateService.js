// src/services/TemplateService.js
class TemplateService {
    static templates = [];
  
    static getAllTemplates() {
      return this.templates;
    }
  
    static createTemplate(name) {
      const newTemplate = {
        id: Date.now(),
        name: name,
        content: '', // You can add content as needed
      };
      this.templates.push(newTemplate);
    }
  
    static saveTemplate(content) {
      // Implement saving logic, e.g., update the content of the selected template
    }
  }
  
  export default TemplateService;
  