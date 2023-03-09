import axios from "@/utils/request"

export default {
    Login(data) {
        return new Promise((resolve, reject) => {
			axios({
				method: 'post',
				url: "/login",
				data: data
			}).then((response) => {
				resolve(response.data);
			}).catch((error) => {
				reject(error);
			})
		})
    }
}
