import getPropsFromWpContent from "../getPropsFromWpContent"

const string = 'striga prova {{ { type:"RichText" } }}altro'

test("getPropsFromWpContent", () => {
  expect(getPropsFromWpContent(string)).toEqual(['striga prova', '{type:"RichText"}', 'altro'])
})