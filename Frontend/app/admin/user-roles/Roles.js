'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    InputAdornment,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    Search as SearchIcon,
    Add as AddIcon,
    MoreVert as MoreVertIcon,
    Edit as EditIcon,
    Delete as DeleteIcon
} from '@mui/icons-material';

export default function Roles() {
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [roles, setRoles] = useState([
        { id: 1, name: 'Catalog Manager', users: 1, description: 'Manages product catalogs' },
        { id: 2, name: 'Admin', users: 2, description: 'Full system access' },
        { id: 3, name: 'Executive', users: 5, description: 'Full system access' },
        { id: 4, name: 'Catalog Manager', users: 4, description: 'Manages product catalogs' }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);

    const filteredRoles = roles.filter(role =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddRoles = () => {
        router.push("/admin/user-roles/add");
    };

    const handleMenuClick = (event, role) => {
        setAnchorEl(event.currentTarget);
        setSelectedRole(role);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRole(null);
    };

    const handleEditRole = () => {
        // Handle edit logic here
        console.log('Edit role:', selectedRole);
        handleMenuClose();
    };

    const handleDeleteRole = () => {
        if (selectedRole) {
            setRoles(roles.filter(role => role.id !== selectedRole.id));
        }
        handleMenuClose();
    };

    return (
        <div className="min-h-screen p-2 w-full">
            <div className="w-full mx-auto">
                {/* Header Card */}
                <Card className="mb-0 rounded-tl-lg">
                    <CardContent className="p-2 sm:p-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <Typography variant="h5" className="text-xl sm:text-2xl font-semibold">
                                Roles
                            </Typography>

                            <div className="flex flex-col sm:flex-row rounded-lg items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                                <TextField
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    size="small"
                                    className="w-full sm:w-64"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon className="text-gray-400" />
                                            </InputAdornment>
                                        ),
                                        className: "focus:border-2 focus:border-[#2FB4FF]"
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: '#D5D5D5',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#2FB4FF',
                                                borderWidth: '2px',
                                                borderRadius: '8px',
                                            },
                                        },
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleAddRoles}
                                    startIcon={<AddIcon />}
                                    className="bg-[#2FB4FF]  text-white px-4 py-2 rounded-lg"
                                    sx={{
                                        backgroundColor: '#2FB4FF',
                                        '&:hover': {
                                            backgroundColor: '#2FB4FF',
                                            opacity: 0.9,
                                        },
                                    }}
                                >
                                    Add Role
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Desktop Table View */}
                {!isMobile ? (
                    <TableContainer component={Paper} className="border border-gray-200 relative overflow-visible">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-medium text-[#727A90] font-[Halvetica]">Role Name</TableCell>
                                    <TableCell className="font-medium text-[#727A90]">No Of Users</TableCell>
                                    <TableCell className="font-medium text-[#727A90]">Description</TableCell>
                                    <TableCell width={50}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredRoles.map((role) => (
                                    <TableRow
                                        key={role.id}
                                        className="hover:bg-gray-50 transition-colors border-b border-gray-100"
                                    >
                                        <TableCell className="text-[#686F83] font-medium ">{role.name}</TableCell>
                                        <TableCell className="text-[#686F83]">{role.users}</TableCell>
                                        <TableCell className="text-[#686F83]">{role.description}</TableCell>
                                        <TableCell className="relative">
                                            <IconButton
                                                onClick={(e) => handleMenuClick(e, role)}
                                                size="small"

                                            >
                                                <MoreVertIcon className="text-gray-400" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {filteredRoles.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-12 text-gray-500">
                                            No roles found matching your search.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    /* Mobile Card View */
                    <Paper className="border border-gray-200">
                        {filteredRoles.map((role) => (
                            <Card key={role.id} className="border-b border-gray-100 last:border-b-0 shadow-none">
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <Typography variant="h6" className="text-lg font-medium text-gray-900">
                                            {role.name}
                                        </Typography>
                                        <div className="relative">
                                            <IconButton
                                                onClick={(e) => handleMenuClick(e, role)}
                                                size="small"
                                                className="hover:bg-gray-200"
                                            >
                                                <MoreVertIcon className="text-gray-400" />
                                            </IconButton>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Typography variant="body2" className="text-gray-500 font-medium w-20">
                                                Users:
                                            </Typography>
                                            <Typography variant="body2" className="text-gray-900">
                                                {role.users}
                                            </Typography>
                                        </div>
                                        <div className="flex items-start">
                                            <Typography variant="body2" className="text-gray-500 font-medium w-20 flex-shrink-0">
                                                Description:
                                            </Typography>
                                            <Typography variant="body2" className="text-gray-900">
                                                {role.description}
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {filteredRoles.length === 0 && (
                            <Box className="px-6 py-12 text-center">
                                <Typography variant="body1" className="text-gray-500">
                                    No roles found matching your search.
                                </Typography>
                            </Box>
                        )}
                    </Paper>
                )}

                {/* Action Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    slotProps={{
                        paper: {
                            elevation: 3,
                            sx: {
                                minWidth: 120,
                                mb: 2,

                                zIndex: 1300,
                            },
                        },
                    }}
                    disablePortal={false}
                >
                    <MenuItem onClick={handleEditRole} className="text-gray-700 hover:bg-gray-50">
                        <EditIcon className="w-4 h-4 mr-2" />
                        Edit
                    </MenuItem>
                    <MenuItem onClick={handleDeleteRole} className="text-red-600 hover:bg-red-50">
                        <DeleteIcon className="w-4 h-4 mr-2" />
                        Delete
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}