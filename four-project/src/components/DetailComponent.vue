<template>
	<div>
		<ul class="items-users">
			<li class="item" v-for="(value, key) in user" :key="key">
				<div>{{ key }}: {{ value }}</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: {
		user: {
			type: Object,
		},
	},
};
</script>
<style lang="css">
.item {
	margin: 5% 0;
}

.x2 {
	margin-left: 10%;
}

.x3 {
	margin-left: 20%;
}
</style>
