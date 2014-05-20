describe('Service: CustomersService', function () {
    // // load the app module
    beforeEach(module('app'));

    it('should exist', inject(function (CustomersService){
      expect(CustomersService).toBeDefined();
    }));

    it('should have length 2, after 2 inserts', inject(function (CustomersService){
        CustomersService.add({'test': 1234});
        CustomersService.add({'test': 5678});
        expect(CustomersService.customers.length).toEqual(2);
    }));

    it('should length 0', inject(function (CustomersService){
        CustomersService.add({'test': 1234});
        CustomersService.delete(0);
        expect(CustomersService.customers.length).toEqual(0);
    }));

});



