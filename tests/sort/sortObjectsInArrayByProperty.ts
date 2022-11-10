import sortObjectsInArrayByProperty from '~/sort/sortObjectsInArrayByProperty'

describe('sort an array', () => {
  describe('Number keys', () => {
    const items = [
      { id: 2, title: '...', pId: 62 },
      { id: 1, title: '...', pId: 43 },
      { id: 4, title: '...', pId: 81 },
      { id: 9, title: '...', pId: 35 },
      { id: 5, title: '...', pId: 74 },
    ]

    describe('ASC sorting ', () => {
      it('should sort the array by ID key ASC', () => {
        expect(sortObjectsInArrayByProperty(items, `id`)).toEqual([
          { id: 1, title: '...', pId: 43 },
          { id: 2, title: '...', pId: 62 },
          { id: 4, title: '...', pId: 81 },
          { id: 5, title: '...', pId: 74 },
          { id: 9, title: '...', pId: 35 },
        ])

        expect(sortObjectsInArrayByProperty(items, `id`, true)).toEqual([
          { id: 1, title: '...', pId: 43 },
          { id: 2, title: '...', pId: 62 },
          { id: 4, title: '...', pId: 81 },
          { id: 5, title: '...', pId: 74 },
          { id: 9, title: '...', pId: 35 },
        ])
      })
      it('should sort the array by pID key ASC ignore Case', () => {
        expect(sortObjectsInArrayByProperty(items, `pId`)).toEqual([
          { id: 9, title: '...', pId: 35 },
          { id: 1, title: '...', pId: 43 },
          { id: 2, title: '...', pId: 62 },
          { id: 5, title: '...', pId: 74 },
          { id: 4, title: '...', pId: 81 },
        ])

        expect(sortObjectsInArrayByProperty(items, `pId`, true)).toEqual([
          { id: 9, title: '...', pId: 35 },
          { id: 1, title: '...', pId: 43 },
          { id: 2, title: '...', pId: 62 },
          { id: 5, title: '...', pId: 74 },
          { id: 4, title: '...', pId: 81 },
        ])
      })
      it('should sort the array by pID key ASC with Case', () => {
        expect(sortObjectsInArrayByProperty(items, `pId`, true, false)).toEqual([
          { id: 9, title: '...', pId: 35 },
          { id: 1, title: '...', pId: 43 },
          { id: 2, title: '...', pId: 62 },
          { id: 5, title: '...', pId: 74 },
          { id: 4, title: '...', pId: 81 },
        ])
      })
    })
    describe('DESC sorting ', () => {
      it('should sort the array by Id key DESC', () => {
        expect(sortObjectsInArrayByProperty(items, `id`, false)).toEqual([
          { id: 9, title: '...', pId: 35 },
          { id: 5, title: '...', pId: 74 },
          { id: 4, title: '...', pId: 81 },
          { id: 2, title: '...', pId: 62 },
          { id: 1, title: '...', pId: 43 },
        ])
      })
      it('should sort the array by pId key DESC ignore Case', () => {
        expect(sortObjectsInArrayByProperty(items, `pId`, false)).toEqual([
          { id: 4, title: '...', pId: 81 },
          { id: 5, title: '...', pId: 74 },
          { id: 2, title: '...', pId: 62 },
          { id: 1, title: '...', pId: 43 },
          { id: 9, title: '...', pId: 35 },
        ])
      })

      it('should sort the array by pId key DESC with Case', () => {
        expect(sortObjectsInArrayByProperty(items, `pId`, false, false)).toEqual([
          { id: 4, title: '...', pId: 81 },
          { id: 5, title: '...', pId: 74 },
          { id: 2, title: '...', pId: 62 },
          { id: 1, title: '...', pId: 43 },
          { id: 9, title: '...', pId: 35 },
        ])
      })
    })
  })

  describe('String keys', () => {
    const repositories = [
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/modules/Mo/symbols.git',
      },
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/modules/Zoo.git',
      },
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/modules/organizations.git',
      },
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/back/packages/contracts.git',
      },
    ]
    describe('ASC sorting ', () => {
      describe('Ignore case ', () => {
        it('should sort the repositories by url key ASC with Case', () => {
          expect(sortObjectsInArrayByProperty(repositories, `url`, true, false)).toEqual([
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/back/packages/contracts.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Mo/symbols.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Zoo.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/organizations.git',
            },
          ])
        })
      })
      describe('Sorting with ignore case ', () => {
        it('should sort the repositories by url key ASC ignore Case', () => {
          expect(sortObjectsInArrayByProperty(repositories, `url`)).toEqual([
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/back/packages/contracts.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Mo/symbols.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/organizations.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Zoo.git',
            },
          ])
        })
      })
    })
    describe('DESC sorting ', () => {
      describe('Ignore case ', () => {
        it('test 1', () => {
          expect(sortObjectsInArrayByProperty(repositories, `url`, false)).toEqual([
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Zoo.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/organizations.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Mo/symbols.git',
            },

            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/back/packages/contracts.git',
            },
          ])
        })
      })
    })
  })
})

describe('sort an object', () => {
  const repositories = {
    name: 'list',
    repositories: [
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/modules/Mo/symbols.git',
      },
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/modules/Zoo.git',
      },
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/modules/organizations.git',
      },
      {
        type: 'vcs',
        url: 'ssh://git@example.com:2225/back/packages/contracts.git',
      },
    ],
  }

  describe('ASC sorting ', () => {
    describe('Ignore case ', () => {
      it('should sort the first-level `repositories` key into an object', () => {
        expect(sortObjectsInArrayByProperty(repositories, `repositories.url`)).toEqual({
          name: 'list',
          repositories: [
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/back/packages/contracts.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Mo/symbols.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/organizations.git',
            },
            {
              type: 'vcs',
              url: 'ssh://git@example.com:2225/modules/Zoo.git',
            },
          ],
        })
      })

      it('should sort the n-level `repositories` key into an object', () => {
        expect(
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
        ).toEqual({
          name: 'list',
          sub1: {
            sub2: {
              sub3: {
                repositories: [
                  {
                    type: 'vcs',
                    url: 'ssh://git@example.com:2225/back/packages/contracts.git',
                  },
                  {
                    type: 'vcs',
                    url: 'ssh://git@example.com:2225/modules/Mo/symbols.git',
                  },
                  {
                    type: 'vcs',
                    url: 'ssh://git@example.com:2225/modules/organizations.git',
                  },
                  {
                    type: 'vcs',
                    url: 'ssh://git@example.com:2225/modules/Zoo.git',
                  },
                ],
              },
            },
          },
        })
      })
    })
  })
})
