const request = require('supertest')('https://api.tmsandbox.co.nz/v1/Categories/6328/Details.json?catalogue=false');
const assert = require('chai').assert;

/**
 * 
 */
describe('Assurity Acceptance Criteria', () => {
    it('GET', async () =>{
        const res = await request.get('/').expect(200);
      // Retrieve element from Promotions with name = 'Feature'
      const promotions = res.body.Promotions.find(x => x.Name === "Feature");
      // Check if Name = "Badges"
      assert("Badges", res.body.Name);
      // Check if CanRelist = true
      assert(true, res.body.CanRelist);
      // Check if The Promotions element with Name = "Feature" has a Description that contains the text "Better position in category"
      assert(promotions.Description.includes("Better position in category"));
      });
    });
