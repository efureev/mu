# sortObjectsInArrayByProperty

> <small>SORT</small>

## Description

Allows to sort an array into an objects by key.

## Use

```js
import sortObjectsInArrayByProperty from '@feugene/mu/src/sort/sortObjectsInArrayByProperty.js'
```

## Examples

### Number keys

```js
 const items = [
  {id: 2, title: '...', pId: 62},
  {id: 1, title: '...', pId: 43},
  {id: 4, title: '...', pId: 81},
  {id: 9, title: '...', pId: 35},
  {id: 5, title: '...', pId: 74},
]
sortObjectsInArrayByProperty(items, `id`) === [
  {id: 1, title: '...', pId: 43},
  {id: 2, title: '...', pId: 62},
  {id: 4, title: '...', pId: 81},
  {id: 5, title: '...', pId: 74},
  {id: 9, title: '...', pId: 35},
]

sortObjectsInArrayByProperty(items, `pId`) === [
  {id: 9, title: '...', pId: 35},
  {id: 1, title: '...', pId: 43},
  {id: 2, title: '...', pId: 62},
  {id: 5, title: '...', pId: 74},
  {id: 4, title: '...', pId: 81},
]

sortObjectsInArrayByProperty(items, `id`, false) === [
  {id: 9, title: '...', pId: 35},
  {id: 5, title: '...', pId: 74},
  {id: 4, title: '...', pId: 81},
  {id: 2, title: '...', pId: 62},
  {id: 1, title: '...', pId: 43},
]
```

### String keys

```js
const repositories = [
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/modules/Mo/symbols.git',
  },
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/modules/Zoo.git',
  },
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/modules/organizations.git',
  },
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/back/packages/contracts.git',
  },
]

sortObjectsInArrayByProperty(repositories, `url`, true, false) === [
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/back/packages/contracts.git',
  },
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/modules/Mo/symbols.git',
  },
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/modules/Zoo.git',
  },
  {
    type: 'vcs',
    url : 'ssh://git@example.com:2225/modules/organizations.git',
  },
];
```

```js
sortObjectsInArrayByProperty(
  {
    name: 'list',
    sub1: {
      sub2: {
        sub3: {
          repositories: repositories.repositories,
        },
      },
    },
  },
  `sub1.sub2.sub3.repositories.url`
)
===
{
  name: 'list',
  sub1: {
    sub2: {
      sub3: {
        repositories: [
          {
            type: 'vcs',
            url : 'ssh://git@example.com:2225/back/packages/contracts.git',
          },
          {
            type: 'vcs',
            url : 'ssh://git@example.com:2225/modules/Mo/symbols.git',
          },
          {
            type: 'vcs',
            url : 'ssh://git@example.com:2225/modules/organizations.git',
          },
          {
            type: 'vcs',
            url : 'ssh://git@example.com:2225/modules/Zoo.git',
          },
        ],
      },
    },
  },
}
```
