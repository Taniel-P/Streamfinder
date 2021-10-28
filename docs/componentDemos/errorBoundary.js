// import ErrorBoundary from './sharedComponents/ErrorBoundary.jsx';

// In parent React Component, place child components within ErrorBoundary tags
// render () {
//   return (
//     <div>
//       <Search
//         onSearch={this.search.bind(this)}
//         error={this.state.searchError}
//         addedUser={this.state.addedUser}
//         reposAdded={this.state.reposAdded}
//         reposUpdated={this.state.reposUpdated}
//       />
//       <div class="horizontal-aligned">
//         <ErrorBoundary>
//           <Users
//             users={this.state.users}
//             onUserClick={this.props.onUserClick}
//           />
//         </ErrorBoundary>
//         <ErrorBoundary>
//           <RepoList
//             repos={this.state.repos}
//             reposTotal={this.state.reposTotal}
//             error={this.state.listError}
//           />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// }