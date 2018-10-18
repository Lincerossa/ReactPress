import getPropsFromWpContent from "../getPropsFromWpContent"

const string = `striga prova ** "Component":"RichText", "props": "c'era ancora tanto da decidere" ** altro`

test("getPropsFromWpContent", () => {
  expect(getPropsFromWpContent(string)).toEqual([{Component: 'String', props: 'striga prova ' }, { Component:'RichText', props: 'c\'era ancora tanto da decidere' }, {Component: 'String', props: ' altro'}])
})