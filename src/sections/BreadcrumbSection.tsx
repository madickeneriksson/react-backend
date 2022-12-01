import React from 'react'
import { NavLink } from 'react-router-dom'

interface BredcrumbSectionType {
  currentPage: string
  parentPage?: string
}

const BreadcrumbSection: React.FC<BredcrumbSectionType> = ({currentPage}) => {
  return (
    <section className="breadcrumb">
        <div className="container">
            <ul className="breadcrumb-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>{currentPage}</li>
            </ul>
        </div>

    </section>
    
  )
}

export default BreadcrumbSection