import { 
  convexAuthNextjsMiddleware, 
  createRouteMatcher, 
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect
} from "@convex-dev/auth/nextjs/server";
 
const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware((request) => {
  if (!isPublicPage(request) && !isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }

  //REDIRECT USER AWAY FROM "/auth" PAGE IF THEY ARE AUTHENTICATED
  if (isPublicPage(request) && isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/");
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
