import React, {Component} from 'react'
import { connect } from 'react-redux'
import { rateBookAction } from '../actions/rate-book-action'
import { bindActionCreators } from 'redux'
import BookList from './../components/book-list'

const mapDispatchToProps = dispatch => ({
    rateBook: bookRating => dispatch(rateBookAction(bookRating))
}) 

const mapStateToProps = (state) => { 
    const {books} = state.bookReducer;
    return {books: books}
 }


export default connect(mapStateToProps, mapDispatchToProps)(BookList)
