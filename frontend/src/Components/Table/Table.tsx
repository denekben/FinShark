import React from 'react'
import { testIncomeStatementData } from './testData'

const data = testIncomeStatementData

type Props = {
    config: any,
    data: any
}

const Table = ({config,data}: Props) => {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val:any) => {
                    return (
                        <td className="p-4 whitespace-nowrap text-sm font-normal test-gray-900">
                            {val.render(company)}
                        </td>
                    )
                })}
            </tr>
        )
    })
    const renderedHeaders = config.map((config: any) => {
        return (
            <th className="p-3"
                key={config.label}
            >
                {config.label}
            </th>
        )
    })
  return (<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <table className="min-w-full divide-y divide-gray-200 m-1">
            <thead className="bg-gray-50">{renderedHeaders}</thead>
            <tbody>{renderedRows}</tbody>
      </table>
    </div>
  )
}

export default Table