import { useMutation, useQuery } from "@tanstack/react-query";
import { API, queryClient } from "../services";

export const useGetMarcas = () => {
    return useQuery(["marcas"], async () => {
      const response = await API.get("/marcas");
      return response.data;
    }, {
      refetchOnWindowFocus: false
    })
  }
  
  export const useCreateMarca = (() => {
    return useMutation(async (data) => {
      const response = await API.post("/marcas", data);
      return response.data;
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries(["marcas"]);
      }
    });
  });
  
  export const useUpdateMarca = (() => {
    return useMutation(async (data) => {
      const response = await API.post(`/marcas/${data.discipline_id}`, data);
      return response.data;
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries(["marcas"]);
      }
    });
  });
  
  export const useDestroyMarca = (() => {
    return useMutation(async (id) => {
      const response = await API.delete(`/marcas/${id}`);
      return response.data;
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries(["marcas"]);
      }
    });
  });