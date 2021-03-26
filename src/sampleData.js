/**
 * Default settings values
 */
export const KEYFIELD = 'name';


/**
 * Columns definition
 * :: used in examples
 */
export const EXAMPLES_COLUMNS_DEFINITION_BASIC = [
    {
        type: 'text',
        fieldName: 'name',
        label: 'Address Name',
        initialWidth: 300,
    },
    {
        type: 'text',
        fieldName: 'idSalome',
        label: 'Id Salomé',
    },
    {
        type: 'text',
        fieldName: 'address',
        label: 'Address'
    },
    {
        type: 'text',
        fieldName: 'billingCity',
        label: 'Billing City',
    },
];



/**
 * Sample data
 * :: used by examples
 */
export const EXAMPLES_DATA_BASIC = [
    {
        name:'Capgemini Lyon 1',
        idSalome: 'CL-001',
        address: "43 rue Pré Gaudry",
        billingCity: 'Lyon',
        _children: [ 
          {
            name: 'Address livraison 01',
            idSalome: 'Liv-001',
            address: "43 rue Pré Gaudry",
            billingCity: 'Lyon',
          },
          {
            name: 'Address livraison 02',
            idSalome: 'Liv-002',
            address: "45 rue Pré Gaudry",
            billingCity: 'Lyon',
          },
        ],
    },
    {
        name:'Capgemini Lyon 2',
        idSalome: 'CL-002',
        address: "99 Chemin de l'Étoile",
        billingCity: 'Lyon',
        _children: [ 
          {
            name: 'Address livraison 01',
            idSalome: 'Liv-003',
            address: "99 Chemin de l'Étoile",
            billingCity: 'Lyon',
          },
          {
            name: 'Address livraison 02',
            idSalome: 'Liv-004',
            address: "99 Chemin de l'Étoile",
            billingCity: 'Lyon',
          },
        ],
    },
];