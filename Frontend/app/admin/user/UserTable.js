'use client';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Pagination,
  FormControl,
  Select,
  MenuItem,
  Menu,
  MenuItem as MenuItemComponent,
  Divider,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
  Search as SearchIcon,
  Close as CloseIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

export default function User() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const users = [
    { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Abc', status: 'Active' },
    { id: 2, name: 'Alice Smith', email: 'jane@company.com', role: 'Def', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'mike@company.com', role: 'Ghi', status: 'Inactive' },
    { id: 4, name: 'Carol Williams', email: 'sara@company.com', role: 'Jkl', status: 'Inactive' },
    { id: 5, name: 'David Brown', email: 'david@company.com', role: 'Mno', status: 'Active' },
    { id: 6, name: 'Eve Davis', email: 'emma@company.com', role: 'Pqr', status: 'Active' },
    { id: 7, name: 'Frank Miller', email: 'chris@company.com', role: 'Stu', status: 'Active' },
    { id: 8, name: 'Grace Wilson', email: 'lisa@company.com', role: 'Vwx', status: 'Inactive' },
    { id: 9, name: 'Hannah Moore', email: 'tom@company.com', role: 'Yz', status: 'Inactive' },
    { id: 10, name: 'Ian Taylor', email: 'nina@company.com', role: 'ABC', status: 'Active' }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handleFilterClick = () => {
    setShowSearchBar(!showSearchBar);
    if (showSearchBar) {
      setSearchQuery('');
    }
  };

  const handleMenuClick = (event, user) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleEdit = () => {
    console.log('Edit user:', selectedUser);
    // Add your edit logic here
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log('Delete user:', selectedUser);
    // Add your delete logic here
    handleMenuClose();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = paginatedUsers.map((user) => user.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <div className="min-h-screen p-2 sm:p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 bg-white p-3 sm:p-4 rounded-tl-lg shadow-sm gap-3 sm:gap-0">
        <h1 className="text-xl font-medium text-gray-900">Users</h1>
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className="flex-1 sm:flex-none"
            sx={{
              backgroundColor: '#2FB4FF',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Add User
          </Button>
          <Button
            variant="contained"
            startIcon={<FilterListIcon />}
            onClick={handleFilterClick}
            className="flex-1 sm:flex-none"
            sx={{
              backgroundColor: '#2FB4FF',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Filters
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearchBar && (
        <div className="mb-4 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <TextField
                fullWidth
                placeholder="Search users by name, email, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className="text-gray-400" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#d1d5db',
                    },
                    '&:hover fieldset': {
                      borderColor: '#9ca3af',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2FB4FF',
                    },
                  },
                }}
              />
            </div>
            <IconButton
              onClick={() => {
                setShowSearchBar(false);
                setSearchQuery('');
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      )}

      {/* Table Container - Desktop View */}
      {!isMobile ? (
        <div className="bg-white  overflow-hidden">
          <TableContainer component={Paper} className="shadow-none">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color='#727A90'
                      indeterminate={selected.length > 0 && selected.length < paginatedUsers.length}
                      checked={paginatedUsers.length > 0 && selected.length === paginatedUsers.length}
                      onChange={handleSelectAllClick}
                      sx={{
                        color: '#2FB4FF',
                        '&.Mui-checked': {
                          color: '#2FB4FF',
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-left py-3 px-6 font-medium text-[#727A90] text-sm">
                    Name
                  </TableCell>
                  <TableCell className="text-left py-3 px-6 font-medium text-[#727A90] text-sm">
                    Email
                  </TableCell>
                  <TableCell className="text-left py-3 px-6 font-medium text-[#727A90] text-sm">
                    Role Name
                  </TableCell>
                  <TableCell className="text-left py-3 px-6 font-medium text-[#727A90] text-sm">
                    Status
                  </TableCell>
                  <TableCell className="w-12"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedUsers.map((user) => {
                  const isItemSelected = isSelected(user.id);
                  return (
                    <TableRow
                      key={user.id}
                      hover
                      onClick={(event) => handleClick(event, user.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      selected={isItemSelected}
                      className="cursor-pointer border-b border-[#E9EAEA] transition-colors"
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color='#686F83'
                          checked={isItemSelected}
                          sx={{
                            color: '#2FB4FF',
                            '&.Mui-checked': {
                              color: '#2FB4FF',
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell className="py-4 px-6 text-[#686F83] font-medium text-sm">
                        {user.name}
                      </TableCell>
                      <TableCell className="py-4 px-6 font-medium text-[#686F83] text-sm">
                        {user.email}
                      </TableCell>
                      <TableCell className="py-4 px-6 font-medium text-[#686F83] text-sm">
                        {user.role}
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <Chip
                          label={user.status}
                          size="small"
                          sx={{
                            backgroundColor: user.status === 'Active' ? '#E6F4F5' : '#FFD5D6',
                            color: user.status === 'Active' ? '#0369a1' : '#dc2626',
                            border: `1px solid ${user.status === 'Active' ? '#009499' : '#FF6365'}`,
                            fontSize: '0.75rem',
                            fontWeight: 400
                          }}
                        />
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <IconButton
                          size="small"
                          className="text-gray-400"
                          onClick={(e) => handleMenuClick(e, user)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-200 gap-4">
              <div className="flex items-center gap-2 order-2 sm:order-1">
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handleChangePage}
                  variant="outlined"
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      borderColor: "#e5e7eb",
                      color: "#6b7280",
                      "&:hover": {
                        backgroundColor: "#2FB4FF",
                        borderColor: "#2FB4FF",
                        color: "white"
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#2FB4FF",
                        borderColor: "#2FB4FF",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#1da1e6",
                        },
                      },
                    },
                  }}
                />
              </div>

              <div className="flex items-center gap-2 order-1 sm:order-2">
                <span className="text-sm text-gray-600">Show</span>
                <FormControl size="small" sx={{ minWidth: 80 }}>
                  <Select
                    value={rowsPerPage}
                    onChange={handleChangeRowsPerPage}
                    sx={{
                      height: 36,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d1d5db",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#9ca3af",
                      },
                    }}
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </TableContainer>
        </div>
      ) : (
        /* Mobile Card View */
        <div className="space-y-3">
          {paginatedUsers.map((user) => {
            const isItemSelected = isSelected(user.id);
            return (
              <Card
                key={user.id}
                className={`shadow-sm ${isItemSelected ? 'ring-2 ring-blue-500' : ''}`}
                onClick={(event) => handleClick(event, user.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        sx={{
                          color: '#2FB4FF',
                          '&.Mui-checked': {
                            color: '#2FB4FF',
                          },
                          padding: '4px'
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <Typography variant="subtitle2" className="font-medium text-gray-900 truncate">
                          {user.name}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600 text-sm truncate">
                          {user.email}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500 text-sm mt-1">
                          {user.role}
                        </Typography>
                        <div className="mt-2">
                          <Chip
                            label={user.status}
                            size="small"
                            sx={{
                              backgroundColor: user.status === 'Active' ? '#f0f9ff' : '#fef2f2',
                              color: user.status === 'Active' ? '#0369a1' : '#dc2626',
                              border: `1px solid ${user.status === 'Active' ? '#bae6fd' : '#fecaca'}`,
                              fontSize: '0.75rem',
                              fontWeight: 500
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <IconButton
                      size="small"
                      className="text-gray-400 hover:text-gray-600"
                      onClick={(e) => handleMenuClick(e, user)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Mobile Pagination */}
          <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <FormControl size="small" sx={{ minWidth: 80 }}>
                <Select
                  value={rowsPerPage}
                  onChange={handleChangeRowsPerPage}
                  sx={{
                    height: 36,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#9ca3af",
                    },
                  }}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              size="small"
              sx={{
                "& .MuiPaginationItem-root": {
                  borderColor: "#e5e7eb",
                  color: "#6b7280",
                  "&:hover": {
                    backgroundColor: "#2FB4FF",
                    borderColor: "#2FB4FF",
                    color: "white"
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#2FB4FF",
                    borderColor: "#2FB4FF",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#1da1e6",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      )}

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            minWidth: '150px'
          }
        }}
      >
        <MenuItemComponent onClick={handleEdit} className="flex items-center gap-2">
          <EditIcon fontSize="small" className="text-gray-600" />
          <span className="text-sm text-gray-700">Edit</span>
        </MenuItemComponent>
        <Divider />
        <MenuItemComponent onClick={handleDelete} className="flex items-center gap-2">
          <DeleteIcon fontSize="small" className="text-red-600" />
          <span className="text-sm text-red-700">Delete</span>
        </MenuItemComponent>
      </Menu>

      {/* Results info */}
      {showSearchBar && searchQuery && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredUsers.length} of {users.length} users
        </div>
      )}
    </div>
  );
}