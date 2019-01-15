import React from 'react'
import { mount } from 'enzyme'
import { StaticRouter } from 'react-router'
import { ProjectsList } from '../../containers/ProjectsList'
import projectsFixture from '../../fixtures/projects'

describe('ProjectsList', () => {
  let wrapper
  const context = {}

  wrapper = mount(
    <StaticRouter context={context}>
      <ProjectsList
        projects={projectsFixture}
        fetchProjects={() =>
          new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve('promise')
            }, 300)
          })
        }
      />
    </StaticRouter>
  )

  it('should have a header Volunteers Directory', () => {
    expect(wrapper.find('Header').text()).toBe('List of Projects')
  })
})