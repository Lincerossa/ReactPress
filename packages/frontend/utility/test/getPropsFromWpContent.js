import getPropsFromWpContent from '../getPropsFromWpContent'

const string = `striga prova ** "Component":"Bomba", "props": "c'era ancora tanto da decidere" ** altro`

test('getPropsFromWpContent', () => {
  expect(getPropsFromWpContent(string)).toEqual([
    {
      Component: 'RichText',
      props: {
        text: 'striga prova ',
      },
    },
    {
      Component: 'Bomba',
      props: 'c\'era ancora tanto da decidere',
    },
    {
      Component: 'RichText',
      props: {
        text: ' altro',
      },
    },
  ])
})
