import { PROGRAMM_URL } from "../../constants.js";
import { apiSlice } from "./apiSlices.js";

const programmSlices = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getuserProgramm: builder.query({
      query: () => ({
        url: `${PROGRAMM_URL}/`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    getChapterDetailById: builder.query({
      query: (id) => ({
        url: `${PROGRAMM_URL}/chapter/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    UpdateSection: builder.mutation({
      query: ({ url, content }) => ({
        url: `${PROGRAMM_URL}/${url}`, // The complete URL with sectionId and subheadingId
        method: "PUT",
        body: { content }, // Sending the new content in the body
      }),
    }),
  }),
});

export const {
  useGetuserProgrammQuery,
  useGetChapterDetailByIdQuery,
  useUpdateSectionMutation,
} = programmSlices;
