/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the SantaModel object */

describe("Santa", function() {

  it("getCurrentRequest shoould work properly", function() {  
    
    SantaModel.init(requests);
    var value = SantaModel.getCurrentRequest();
    expect(value.question).toEqual("Carlo wants a TOY. Shall I pack a banana?");
      expect(value.options).toEqual(["yes", "no"]);
      expect(value.answer).toEqual("no");
  }); 
    
    it("Pack shoould work properly", function() {  
    
    SantaModel.init(requests);
    var value = SantaModel.pack("yes");
    expect(value).toBe(0);
  }); 
 
});
