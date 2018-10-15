import React from 'react'

import trimHtml from 'trim-html'
import * as S from './styles'

const Card = ({ options = {}, media, supertitle, title, tags, subtitle, content }) => {

  const { html } = content && trimHtml(content, { limit: 75 });
  const { full } = options
  
  return(
    <S.Card>
      <S.MediaWrapper full={full} >
        <S.Media src={media.url} alt={media.alt} title={media.title} />
      </S.MediaWrapper>
      
      <S.Description full={full}>
        <S.Supertitle dangerouslySetInnerHTML={{__html: supertitle}} />
        <S.Title full={full} dangerouslySetInnerHTML={{__html: title}} />
        { tags && tags.length > 0 &&
          <S.TagsWrapper>
            {
              tags.map(tag => <S.Tag dangerouslySetInnerHTML={{__html: tag}} />)
            }
          </S.TagsWrapper>
        }
        {subtitle && <S.Subtitle full={full} dangerouslySetInnerHTML={{__html: subtitle}} />}
        {html && <S.Content dangerouslySetInnerHTML={{__html: html}} />}
      </S.Description>
    </S.Card>
  )
}


export default Card
