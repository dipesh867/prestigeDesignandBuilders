//   const handleLogin = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`${API_BASE_URL}/admin/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ password }),
//       });

//       if (response.ok) {
//         setIsAuthenticated(true);
//         toast({
//           title: "Login Successful",
//           description: "Welcome to the admin panel!",
//           variant: "default",
//           duration: 3000,
//         });
//       } else {
//         throw new Error("Invalid credentials");
//       }
//     } catch (error) {
//       toast({
//         title: "Login Failed",
//         description: "Invalid password. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setPassword("");
//     navigate("/");
//     toast({
//       title: "Logged Out",
//       description: "You have been logged out",
//       duration: 3000,
//     });
//   };
