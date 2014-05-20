describe('E2E: App', function () {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should jump to the /customers path when / is accessed', function() {
        browser().navigateTo('#/');
        expect(browser().location().path()).toBe('/customers');
    });

    it('should jump to the /customers/add path when /customers/add is accessed', function() {
        browser().navigateTo('#/customers/add');
        expect(browser().location().path()).toBe('/customers/add');
    });

    it('should verify that the counted elementes are  more than 3 elements', function() {
        expect(repeater('#customer-list > li').count()).toBeGreaterThan(3);
    });

    it('should verify if filtered by "schreinerei" there is only one element', function() {
        input('searchData').enter('schreinerei');
        expect(repeater('#customer-list > li').count()).toBe(1);
    });

    it('should click on "Neuer Kunde" and jump to "/customers/add"', function() {
        element('a[ng-href="#customers/add"]').click();
        expect(browser().location().path()).toBe('/customers/add');
    });

    it('should click on remove icon and count customers list (it should be 3)', function() {
        element('a.remove-item:eq(1)').click();
        expect(repeater('#customer-list > li').count()).toBe(3);
    });

    it('should jump to "/customers/add" and insert one new customer (inkl. ) an then jump back to /customers an count customers list (it should be 5)', function() {
        browser().navigateTo('#/customers/add');
        input('companyName').enter('Mustermann GmbH');
        input('postcode').enter('86150');
        input('place').enter('Augsburg');
        element('button[ng-click="addItem()"]').click();
        expect(element('.bg-success').text()).toBe('Kunde wurde erfolgreich angelegt');
        
        browser().navigateTo('#/customers');
        expect(browser().location().path()).toBe('/customers');
        expect(repeater('#customer-list > li').count()).toBe(5);
    });

});



