import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { searchCompanies } from '../../api'
import Navbar from '../../Components/Navbar/Navbar'
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio'
import CardList from '../../Components/Cardlist/CardList'
import { CompanySearch } from '../../company'
import Search from '../../Components/Search/Search'
import { PortfolioGet } from '../../Models/Portfolio'
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService'
import { toast } from 'react-toastify'

type Props = {}

const SearchPage = (props: Props) => {
    const[search, setSearch] = useState<string>("")
  const[portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([])
  const[searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const[serverError, setServerError] = useState<string>("");


  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      console.log(e)
  }

  const getPortfolio = () => {
    portfolioGetAPI()
    .then((res)=> {
      if(res?.data) {
        setPortfolioValues(res?.data)
      }
    }).catch((e)=> {
      toast.warning("Could not get portfolio values!")
    })
  }

  const onPorfolioCreate = (e:any) => {
    e.preventDefault()
    portfolioAddAPI(e.target[0].value)
    .then((res)=> {
      if(res?.status==204) {
        toast.success("Stock added to portfolio!")
        getPortfolio()
      }
    }).catch((e)=> {
      toast.warning("Could not create portfolio item!")
    })
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
      const result = await searchCompanies(search)
      if(typeof result === "string") {
        setServerError(result)
      } else if(Array.isArray(result.data)) {
        setSearchResult(result.data)
      }
      console.log(searchResult)
  }

  const onPortfolioDelete = (e:any) => {
    e.preventDefault()
    portfolioDeleteAPI(e.target[0].value)
    .then((res)=> {
      if(res?.status==200) {
        toast.success("Stock deleted from portfolio!")
        getPortfolio()
      }
    })
  }
  
  useEffect(() => {
    getPortfolio()
  },[])

  return (
    <>
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete}/>
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPorfolioCreate}
      />
      {serverError && <h1>{serverError}</h1>}
    </>
  )
}

export default SearchPage