import React from 'react'
import FragmentColumn from './FragmentColumn'

function FragmentTable() {
  return (
    <div>
      <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Practice</th>
            </tr>
            <tr>
                <FragmentColumn></FragmentColumn>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FragmentTable
