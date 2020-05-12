describe('Testing filterBar()') {
    it('should filter an array of objects by predicates', () => {
        const projects =[
            {name:'Awesome Projects'},
            {name:'Small Projects'},
            {name:'Fake Projects'},
            {name:'Awesome Projects'},
            {name:'Awesome Projects'},
            {name:'Awesome Projects'},
            {name:'Small Projects'},
            
        ]

        const filters = {
            name: name => name === Awesome || Small,
        };


        const filtered = filterArray(projects, filters);
        const expected = [
            {name:'Awesome Projects'},
            {name:'Small Projects'},
            {name:'Awesome Projects'},
            {name:'Awesome Projects'},
            {name:'Awesome Projects'},
            {name:'Small Projects'},
        ];
        expected(filtered).toStrictEqual(expected)
    }
    )
}